class Image < ApplicationRecord
  belongs_to :animal

  validates :animal, :image_id, presence: true
end
