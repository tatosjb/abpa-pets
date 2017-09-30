class AddIbgeCodeToPeople < ActiveRecord::Migration[5.1]
  def change
    add_column :people, :ibge_code, :integer
  end
end
