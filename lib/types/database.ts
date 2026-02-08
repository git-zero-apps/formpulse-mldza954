// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  role: string;
  subscription_plan: string;
  team_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  role?: string;
  subscription_plan?: string;
  team_id: string | null;
}

export interface Teams {
  id?: string;
  name: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
}

export interface TeamsInsert {
  name: string;
  owner_id: string;
}

export interface Surveys {
  id?: string;
  user_id: string;
  team_id: string | null;
  title: string;
  description: string | null;
  status: string;
  share_url: string;
  close_date: string | null;
  response_count: number;
  created_at: string;
  updated_at: string;
}

export interface SurveysInsert {
  user_id: string;
  team_id: string | null;
  title: string;
  description: string | null;
  status?: string;
  share_url: string;
  close_date: string | null;
  response_count?: number;
}

export interface Questions {
  id?: string;
  survey_id: string;
  question_text: string;
  question_type: string;
  options: Record<string, unknown> | null;
  is_required: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface QuestionsInsert {
  survey_id: string;
  question_text: string;
  question_type: string;
  options: Record<string, unknown> | null;
  is_required?: boolean;
  order_index: number;
}

export interface Responses {
  id?: string;
  survey_id: string;
  respondent_email: string | null;
  completion_status: string;
  submitted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ResponsesInsert {
  survey_id: string;
  respondent_email: string | null;
  completion_status?: string;
  submitted_at: string | null;
}

export interface Answers {
  id?: string;
  response_id: string;
  question_id: string;
  answer_value: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface AnswersInsert {
  response_id: string;
  question_id: string;
  answer_value: Record<string, unknown>;
}
