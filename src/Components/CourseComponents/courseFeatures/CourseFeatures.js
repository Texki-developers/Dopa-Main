import React from 'react'
import styles from './CourseFeatures.module.scss'

export default function CourseFeatures({data}) {
  return (
    <div className={styles.course_features_wrapper}>
        {data && data?.map((item)=>(
     <div className={styles.course_features_content}>
     <img src={item.image.src} alt="DopaVideoLectures"/>
     <h4 dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, "<br>") }} ></h4>
         </div>
        ))

        }
   
    </div>
  )
}
