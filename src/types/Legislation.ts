export interface Bill {
  id: string;
  bill_number: string;
  congress: number;
  title: string;
  summary?: string;
  plain_english_summary?: string;
  chamber: string;
  status: string;
  sponsor_id?: string;
  introduced_date: string;
  update_date: string;
}