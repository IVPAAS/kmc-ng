import { Component } from '@angular/core';

import { EntryClipsHandler } from './entry-clips-handler';

@Component({
    selector: 'kEntryClips',
    templateUrl: './entry-clips.component.html',
    styleUrls: ['./entry-clips.component.scss']
})
export class EntryClips{

    public _loading = false;
    public _loadingError = null;

    constructor(public _handler : EntryClipsHandler) {
    }

    public _onSortChanged(event : any)
    {
        this._handler.sortAsc = event.order === 1;
        this._handler.sortBy = event.field;

        this._handler.updateClips();
    }

    public _onPaginationChanged(state : any) : void {
        if (state.page !== this._handler.pageIndex || state.rows !== this._handler.pageSize) {
            this._handler.pageIndex = state.page;
            this._handler.pageSize = state.rows;
            this._handler.updateClips();
        }
    }

    public _onLoadingAction(actionKey: string) {
        if (actionKey === 'retry') {

        }
    }
}
