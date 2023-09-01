export interface MaintainResponse {
  page: Page[];
  scheduled_maintenances: ScheduledMaintenance[];
}

interface Page {
  id: string;
  name: string;
  url: string;
  time_zone: string;
  updated_at: Date;
}

export interface ScheduledMaintenance {
  id: string;
  name: string;
  status: IncidentUpdateStatus;
  created_at: Date;
  updated_at: Date;
  monitoring_at: null;
  resolved_at: Date;
  impact: string;
  shortlink: string;
  started_at: Date;
  page_id: string;
  incident_updates: IncidentUpdate[];
  components: [];
  scheduled_for: Date;
  scheduled_until: Date;
}

enum IncidentUpdateStatus {
  Completed = 'completed',
  InProgress = 'in_progress',
  Scheduled = 'scheduled',
}

export interface IncidentUpdate {
  id: string;
  status: IncidentUpdateStatus;
  body: string;
  incident_id: string;
  created_at: Date;
  updated_at: Date;
  display_at: Date;
  affected_components: null;
  deliver_notifications: boolean;
  custom_tweet: null;
  tweet_id: number | null;
}
