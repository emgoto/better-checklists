export type ChecklistItem = {
    text: string;
    isComplete?: boolean;
    assigneeUsername?: string;
    avatarHash?: string;// last known avatarHash //TODO: need to re-get it in case it has changed
    dueDate?: number;
    dueDateFriendly?: string; // Date in human readbable format e.g. 1 Jan 12:00pm
    notificationTime?: number;
};

export const getItems = (t): Promise<ChecklistItem[]> => t.get('card', 'shared', 'items');
export const setItems = (t, items: ChecklistItem[]): Promise<ChecklistItem[]> => t.set('card', 'shared', 'items', items);
export const getIsChecklistEnabled = (t): Promise<boolean> => getItems(t).then((items: ChecklistItem[]) => items ? true : false);
