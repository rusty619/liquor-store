class CreateBrands < ActiveRecord::Migration[6.1]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :country
      t.string :country_img
      t.string :img
      t.string :description
      t.string :website

      t.timestamps
    end
  end
end
