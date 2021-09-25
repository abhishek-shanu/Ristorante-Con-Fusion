package database

import "time"

// Orders table in database
type Orders struct {
	tableName       struct{}  `sql:"orders"`
	ID              int       `sql:"id, type:serial primary key"`
	FkUserID        int       `sq:"fk_user_id, type:int not null references users(id) on delete cascade on update cascade"`
	Total           float64   `sql:"total, type: numeric not null"`
	DeliveryAddress string    `sql:"delivery_address, type: varchar(255) not null"`
	CreatedAt       time.Time `sql:"created_at, type: timestamp not null default now()"`
}
