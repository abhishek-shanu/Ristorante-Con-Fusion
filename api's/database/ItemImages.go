package database

// ItemImages table in database
type ItemImages struct {
	tableName    struct{} `sql:"item_images"`
	ID           int      `sql:"id", type: serial primary key`
	FkMenuItemID int      `sql:"fk_menu_item_id, type:int not null references menu_item(id) on delete cascade on update cascade"`
	Url          string   `sql:"url" type: varchar(255)`
}
