class Post < ApplicationRecord
    belongs_to :user
    has_many :likes, dependent: :destroy
    has_many :comments, dependent: :destroy

    # validates: image, presence: true
    # validates: caption, presence: true

end