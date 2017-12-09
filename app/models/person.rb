class Person < ApplicationRecord
  validates :name, :ibge_code, :address, :neighborhood, presence: true
  validates :cpf, presence: true, uniqueness: true

  has_many :animals

  self.per_page = 10
end
