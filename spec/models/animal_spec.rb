require 'rails_helper'

describe Animal, type: :model do

  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :birthdate }
  it { is_expected.to have_many :adoptions }
end