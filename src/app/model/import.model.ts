export interface Import{
    imp_id: number;
    imp_desc: string;

    pro_id: number;
    pro_new_qty: number;

    emp_id: number;

    created_at?: string;
    updated_at?: string;
}