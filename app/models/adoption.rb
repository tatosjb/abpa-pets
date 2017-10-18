class Adoption < ApplicationRecord
  belongs_to :animal
  belongs_to :person

  validates :animal, :person, presence: true
end
