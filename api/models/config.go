package models

/* All the configuration models are created here */

// Master config model
type Config struct {
	DBConfig     DBConfig     `json:"database"`
	ServerConfig ServerConfig `json:"server"`
}

// database configuration model
type DBConfig struct {
	Addr     string `json:"port"`
	Database string `json:"name"`
	User     string `json:"user"`
	Password string `json:"password"`
}

// server configuration model
type ServerConfig struct {
	Port string `json:"port"`
	Host string `json:"host"`
}
