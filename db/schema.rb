# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171003153120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addoptions", force: :cascade do |t|
    t.bigint "animal_id"
    t.bigint "person_id"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["animal_id"], name: "index_addoptions_on_animal_id"
    t.index ["person_id"], name: "index_addoptions_on_person_id"
  end

  create_table "animals", force: :cascade do |t|
    t.integer "pet_type"
    t.integer "size"
    t.integer "fur"
    t.integer "color"
    t.integer "gender"
    t.date "birthdate"
    t.text "description"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "rg"
    t.string "cpf"
    t.string "occupation"
    t.string "company"
    t.string "address"
    t.string "neighborhood"
    t.string "referece_point"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ibge_code"
  end

  add_foreign_key "addoptions", "animals"
  add_foreign_key "addoptions", "people"
end
