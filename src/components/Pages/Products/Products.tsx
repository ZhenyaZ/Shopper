import React from 'react'
import Card from '../../UI/Card/Card'
import styles from './Products.module.css'
import headphonesImg from '../../../assets/headphones.png'

function Products() {
  return (
    <section className={styles.products}>
        <div className={`${styles['products-content']} container`}>
            <div className={styles["products-products-list"]}>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
                <Card image={headphonesImg} title='Headphones' price={200}/>
            </div>
        </div>
    </section>
  )
}

export default Products