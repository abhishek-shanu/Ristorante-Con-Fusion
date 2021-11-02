package models

/* All the common response related models are mentioned here */

// common response model
type Response struct {
	StatusCode int         `json:"-"`
	Status     bool        `json:"status"`
	Message    string      `json:"message"`
	PayLoad    interface{} `json:"payload"`
}
