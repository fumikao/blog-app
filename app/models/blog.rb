class Blog < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :comments
  mount_uploader :image, ImageUploader

  validates :content, presence: true, unless: :image? 
end
