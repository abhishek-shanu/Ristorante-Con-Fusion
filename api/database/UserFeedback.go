package database

// UserFeedback table in database
type UserFeedback struct {
	tableName struct{} `sql:"feedback"`
	ID        int      `sql:"id, type: serial primary key"`
	FkUserId  int      `sql:"fk_user_id, type: int not null references users(id) on delete cascade on update cascade"`
	Feedback  string   `sql:"feedback, type: varchar(255) not null"`
	Rating    int8     `sql:"rating, type: int"`
}
