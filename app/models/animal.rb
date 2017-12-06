class Animal < ApplicationRecord
  include TranslateEnum
  validates :name, presence: true
  validates :birthdate, presence: true
  validates :placement, presence: true

  has_many :adoptions
  has_many :images

  self.per_page = 10

  enum pet_type: {dog: 0, cat: 1, wildAnimal: 2, domesticAnimal: 3}
  translate_enum :pet_type

  enum size: {small: 0, medium: 1, large: 2}
  translate_enum :size

  enum fur: [:straightShort, :straightLong, :curlyShort, :curlyLong]
  translate_enum :fur

  enum color: [:white, :black, :chocolate, :brown, :brasino, :blackAndWhite, :blackCaramel, :beige]
  translate_enum :color

  enum gender: [:male, :female]
  translate_enum :gender

end
