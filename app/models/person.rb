class Person < ApplicationRecord
  validates :name, :ibge_code, :address, :neighborhood, presence: true
  validates :cpf, presence: true, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, if: :email?
  has_many :animals

  self.per_page = 10
end
