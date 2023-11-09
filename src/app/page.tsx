import Image from 'next/image'
import Hero from './hero/page'
import States from './states/page'
import Post from './post/page'
import Test from './test/page'
import Contact from './contact/page'
export default function Home() {
  return (
   <div>
    <Hero/>
  <Post/>
    <States/>
    <Test/>
    
    <Contact/>
   </div>
  )
}
