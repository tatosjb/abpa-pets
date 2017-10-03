class Adoption < ApplicationRecord
  belongs_to :animal
  belongs_to :person
end
