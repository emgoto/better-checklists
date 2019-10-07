export type ChecklistItem = {
    text: string;
    assigneeUsername?: string;
    avatarHash?: string;// last known avatarHash //TODO: need to re-get it in case it has changed
    dueTime?: number;
    notificationTime?: number;
};

export const getItems = (t): Promise<ChecklistItem[]> => t.get('card', 'shared', 'items');
export const setItems = (t, items: ChecklistItem[]): Promise<ChecklistItem[]> => t.set('card', 'shared', 'items', items);
export const getIsChecklistEnabled = (t): Promise<boolean> => getItems(t).then((items: ChecklistItem[]) => items ? true : false);
