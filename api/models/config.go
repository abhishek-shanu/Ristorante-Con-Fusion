package models

type Config struct {
	DBConfig DBConfig `json:"database"`
}

type DBConfig struct {
	Addr     string `json:"port"`
	Database string `json:"name"`
	User     string `json:"user"`
	Password string `json:"password"`
}
