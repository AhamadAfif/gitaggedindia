import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';

const app = new Hono();

// Enable CORS for all routes
app.use('*', cors());
app.use('*', logger(console.log));

// Create Supabase client for admin operations
const getSupabaseAdmin = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
};

// Create Supabase client for user operations
const getSupabaseClient = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  );
};

// Health check route
app.get('/make-server-c442bf0e/health', (c) => {
  return c.json({ status: 'ok', message: 'GI-Tagged India server is running' });
});

// Sign up route
app.post('/make-server-c442bf0e/auth/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }

    const supabase = getSupabaseAdmin();
    
    // Create user with admin API to automatically confirm email
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || '' },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log('Signup error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ 
      success: true, 
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.name
      }
    });
  } catch (error) {
    console.log('Signup error:', error);
    return c.json({ error: 'Failed to create user' }, 500);
  }
});

// Check if user exists (for validation)
app.post('/make-server-c442bf0e/auth/check-email', async (c) => {
  try {
    const { email } = await c.req.json();

    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }

    const supabase = getSupabaseAdmin();
    
    // List users by email
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) {
      console.log('Check email error:', error);
      return c.json({ error: error.message }, 400);
    }

    const userExists = data.users.some(user => user.email === email);

    return c.json({ exists: userExists });
  } catch (error) {
    console.log('Check email error:', error);
    return c.json({ error: 'Failed to check email' }, 500);
  }
});

// Get current user info (protected route)
app.get('/make-server-c442bf0e/auth/user', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const supabase = getSupabaseAdmin();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    return c.json({ 
      user: {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name
      }
    });
  } catch (error) {
    console.log('Get user error:', error);
    return c.json({ error: 'Failed to get user info' }, 500);
  }
});

Deno.serve(app.fetch);
