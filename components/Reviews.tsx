
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#F36E42] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join The <span className="text-[#FFC100]">Revolution</span></h2>
            <p className="text-white/80">Join the community of people transforming their wellness with the power of flowers.</p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
            <div className="text-right">
              <div className="flex gap-1 justify-end mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} className="text-[#FFC100] fill-[#FFC100]" />)}
              </div>
              <p className="font-bold text-sm">4.9/5 Average Rating</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="text-xl font-bold">🏆</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between text-[#1A1A1A]">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-[#FFC100] fill-[#FFC100]" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-[#2D2A26] italic font-medium">"{rev.content}"</p>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#0C8281] font-bold uppercase tracking-wider">
                    {rev.verified && <CheckCircle size={10} />} Verified Buyer
                  </div>
                </div>
                <span className="text-xs text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full border-2 border-white font-bold hover:bg-white hover:text-[#F36E42] transition-all">
            READ ALL REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
