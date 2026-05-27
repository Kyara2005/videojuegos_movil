import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export interface Videojuego {
  id?: number;
  titulo: string;
  portada: string;
  categoria?: string;
  descripcion?: string;
  link_referencia?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async listar() {
    const { data, error } = await this.supabase
      .from('series')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;
    return data as Videojuego[];
  }

  async obtenerPorId(id: number) {
    const { data, error } = await this.supabase
      .from('series')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Videojuego;
  }

  async crear(series: Videojuego) {
    const { data, error } = await this.supabase
      .from('series')
      .insert(series)
      .select();

    if (error) throw error;
    return data;
  }

  async actualizar(id: number, series: Videojuego) {
    const { data, error } = await this.supabase
      .from('series')
      .update(series)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data;
  }

  async eliminar(id: number) {
    const { error } = await this.supabase
      .from('series')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}