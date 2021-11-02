package models

/* All the comment related request models are mentioned here */

import (
	"time"
)

type CommentResponse struct {
	CommentID   int       `json:"comment_id"`
	Username    string    `json:"username"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
}
