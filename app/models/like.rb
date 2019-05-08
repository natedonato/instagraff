# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :photo_id, presence: true

    belongs_to :user
    
    belongs_to :photo

end
