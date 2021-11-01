package database

// ConfigInfo table in database
type ConfigInfo struct {
	tableName   struct{} `sql:"config_info"`
	ID          int      `sql:"id, type: serial primary key"`
	ConfigName  string   `sql:"config_name, type: varchar(255) not null"`
	ConfigValue string   `sql:"config_value, type: varchar(255)"`
}
