export interface TodoItem {
    id?: number;
    title?: string;
    note?: string;
    important?: boolean;
    starred?: boolean;
    done?: boolean;
    read?: boolean;
    selected?: boolean;
    startDate?: string;
    dueDate?: string;

    tag?: number[];
}

export interface TagItem {
    id?: number;
    name?: string;
}