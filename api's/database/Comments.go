package database

import "time"

// Comments table in database
type Comments struct {
	tableName    struct{}  `sql:"comments"`
	ID           int       `sql:"id, type: serial primary key"`
	FkUserId     int       `sql:"fk_user_id, type:int not null references users(id) on delete cascade on update cascade"`
	FkMenuItemId int       `sql:"fk_menu_item_id, type:int not null references menu_item(id) on delete cascade on update cascade"`
	Description  string    `sql:"description, type:varchar(255) not null"`
	CreatedAt    time.Time `sql:"created_at, type:timestamp not null default now()"`
}
