class Person < ApplicationRecord
  validates :name, :cpf, :ibge_code, :address, :neighborhood, presence: true

end
