
#### ng-sortable

#### Implementation Details

- Uses angular/native JS for sortable and draggable. no JQueryUI used.
- Provides callbacks for drag/drop events.
- Implementation follows Prototypical scope inheritance.

#### Directives structure:

###### Structure:

  sortable                     --> Items list
    sortable-item              --> Item to sort/drag
      sortable-item-handle     --> Drag Handle 

#### Design details:

- ng-model is used to bind the sortable list items with the sortable element.
- sortable can be added to the root element.
- sortable-item can be added in item element, and follows ng-repeat.
- sortable-item-handle can be added to the drag handle in item element.
- All sortable, ng-model, sortable-item and sortable-item-handle are required.
- the no-drag attribute can be added to avoid dragging an element inside item-handle.
- Added a Jquery like 'containment' option to the sortable to prevent the drag outside specified bounds.

#### Callbacks:

Following callbacks are defined, and should be overridden to perform custom logic.

1) callbacks.accept = function (sourceItemScope, destScope) {}; //used to determine drop zone is allowed are not.

###### Parameters:
     sourceItemScope - the scope of the item being dragged.
     destScope - the sortable destination scope, the list.

2) callbacks.orderChanged = function({type: Object}) // triggered when item order is changed with in the same swimlane.
3) callbacks.itemMoved = function({type: Object}) // triggered when an item is moved accross swimlanes.
4) callbacks.dragStart = function({type: Object}) // triggered on drag start.
5) callbacks.dragEnd = function({type: Object}) // triggered on drag end.

###### Parameters:
    Object (event) - structure         
             source:
                  index: original index before move.
                  itemScope: original item scope before move.
                  sortableScope: original sortable list scope.
             dest: index
                  index: index after move.
                  sortableScope: destination sortable scope.  

##### Testing:

- Tested on FireFox, IE, Chrome.
- Ipad, Iphone and Android devices.