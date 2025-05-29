import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import NavItemLeft from '../../components/NavItemLeft'
import NavItemMain from '../../components/NavItemMain'
import NavItemRight from '../../components/NavItemRight'
import Marquees from '../../components/Marquees'

const HomeLayout = () => {
  return (
     <>
{/* Header section Start  */}
      <div className='container mx-auto'>
        <header>
          <Header/>
        </header>
      </div>
{/* Header section End  */}

{/* Nav section Start  */}
      <div className='container mx-auto'>
        <Marquees/>
        <nav>
          <Navbar/>
        </nav>
      </div>
{/* Nav section End  */}

{/* main section Start */}
      <section className='container mx-auto grid grid-cols-12 '>
{/* NavItemLeft Section start */}
      <div className="NavItemLeft  col-span-3 ">
        <aside>
          <NavItemLeft/>
        </aside>
      </div>
{/* NavItemLeft Section End */}

 {/* NavItem Main Section Start  */}
      <section className='navItemMiddle col-span-6'>
        <main>
          <NavItemMain/>
        </main>
      </section>
{/* NavItem Main Section End */}

{/* NavItemRigt Section start */}
      <div className="NavItemRight col-span-3">
        <aside>
          <NavItemRight/>
        </aside>
      </div>
{/* NavItemRigt Section End */}
      </section>

    </>
  )
}

export default HomeLayout