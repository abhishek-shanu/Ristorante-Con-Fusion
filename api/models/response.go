package models

type Response struct {
	StatusCode int         `json:"-"`
	Status     bool        `json:"status"`
	Message    string      `json:"message"`
	PayLoad    interface{} `json:"payload"`
}
