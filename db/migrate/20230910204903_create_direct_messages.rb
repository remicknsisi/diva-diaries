class CreateDirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :direct_messages do |t|
      t.integer :sender_id
      t.integer :recipient_id
      t.string :content
      t.timestamps
    end
  end
end
