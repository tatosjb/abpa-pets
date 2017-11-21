class Person < ApplicationRecord
  validates :name, :ibge_code, :address, :neighborhood, presence: true
  validates :cpf, presence: true, uniqueness: true

  self.per_page = 10
end
