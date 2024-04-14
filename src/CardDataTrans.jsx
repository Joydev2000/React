import React from 'react'

function CardDataTrans({ gap,img,name }) {
  return (
    <div className={`w-1/2 m-auto ${gap}`}>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-1/2 h-48 object-contain  mx-auto" src = {img} alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg ">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
    <div className='font-semibold'>
    Sarah Dayan
  </div>
  <div className='font-bold'>
   {name}
  </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default CardDataTrans