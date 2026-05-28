import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    // Para login y registro
    public supabase: SupabaseClient = createClient(
        environment.supabaseUrlLogin,
        environment.supabaseKeyLogin,
        {
            auth: {
                storageKey: 'supabase-auth-client',
            }
        }
    );

    // Para la base de datos
    public supabaseDB: SupabaseClient = createClient(
        environment.supabaseUrl,
        environment.supabaseKey,
        {
            auth: {
                storageKey: 'supabase-db-client',
                // persistSession: false, // no guarda sesión, no necesita lock
                // autoRefreshToken: false // no refresca token, no necesita lock
            }
        }
    );

    login(email: string, password: string) {
        return this.supabase.auth.signInWithPassword({
        email,
        password
        });
    }

    register(email: string, password: string) {
        return this.supabase.auth.signUp({
        email,
        password
        });
    }

    logout() {
        return this.supabase.auth.signOut();
    }
}
