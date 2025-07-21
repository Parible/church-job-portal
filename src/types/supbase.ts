// types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: number;
          title: string;
          description: string;
          location: string | null;
          job_type: string;
          deadline: string | null;
          created_at: string;
        };
        Insert: {
          title: string;
          description: string;
          location?: string | null;
          job_type: string;
          deadline?: string | null;
        };
        Update: {
          title?: string;
          description?: string;
          location?: string | null;
          job_type?: string;
          deadline?: string | null;
        };
      };
    };
  };
}
