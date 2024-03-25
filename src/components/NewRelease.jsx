import React from 'react'
import '../components/style.css'

const NewRelease = () => {
  return (
    <div className='newrelease'>
        <h2>New Release</h2>
        <div className='anime'>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSahcP4cD6AJDxQ0veMmIN~FIL0LRHVj3ldHF7nimN9Yc7bv2zynM0AUrezblipC~BHtdZ05jV7inX9c8~aCPXa6irWxVnA5~cevFUHbqMJuk3nvDxFtISs1raqK~Wplz9oBRqcLaX2oDLzcw1ynFDoQP~fN37-A~Cuw8rYbTLoqF5gK41F5uv4txz-FwoKyvHtlm0892zTQ3CU47VX-FOtpYLuKUJJ0Mz3foGOoWJTJVxWIJ7Vj8zTm5ByMUeHNJAfelthpWHu2TWyOpAZM0bcp~SFUGzhKwwYK-x27KSS9jgVG5CWcZE9WxoU8uQwqi49KS3uhVSKUnnQwsaay-A__" alt="1"/>
                <h3>One Piece</h3>
            </div>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StueYOn-TtGqg9g6n8SIVw2nRgqq09KYpTSr0O9t-33i-YZDMyG6Bv7~iDLYLUPeGrbPcWDcPIQ7PHqMbDpTd4oSS2sxvQHK6bBpy55Jy6VA3t4P~Z6hAaUKP8f1yGiu5zYfExEZXCkrZgZsyaw9EQpmfwU~QrNva7rSbXDD7PziKZRmChIuUvSUhIowfMCs1gryEruyC-Pu6qBlprfx-uOmqP6SWlKix9XMQ~s1fyrswvFakcc2W8sdbflQKnO99lh~V5vNEbvY~B0EseOD92gWp3RUGRZaMU2j8rrd07a4TNyUHCXNCUDKXWPu2HQW328LKXSf9MeSnvPeQonPag__" alt="2"/>
                <h3>Boruto Naruto Next Generations</h3>
            </div>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJYPbA8H5r0MA5qWfHCP5QOoax8KYDY613D1VRZt58a4k5RGPZdCSM5xnoIysN6xN0nMn9BLO4YX58Mj2aFHNT4VG9pawREe9lYD4DnPPO1Nj2V0BlNYJZikPDI~PAOxxyk20A6hHNys9gVAwCDAliV-2fnRa1NM3NclVX9Md2rpgOM8ZHjvlXy2pNKHkaV56n7r3BYHN0daMbuC3IhEyjgjR-jIjoUwUqP5obsYNah5Wq~fS4lX5qzp2Pw6JhaZkUQQCDSJweoBG-pELqsC2z8H5B5-yASp3db984tfPy~jIOJ7DIDaUMZ9YDej-4q7wT8u6Tq~ovyZfyl5p3YbQQ__" alt="3"/>
                <h3>Spy X Family</h3>
            </div>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lp4CsjRxLlzhOju9-6lhTTm4poF0J7ljVPXP-N-~oiuG1ZudBY5mFwujSk~OEI79vgm50o7sbS8njY23tswt0JGFzE7KoQHkKmhlGRWsYfVCtrBkB2T-Enw8QL-~OK2PeuXA2BLhhx7LwFRlCeE3SUAwgPt1Mbz0MQbWRYAdHVWDRqLR4UGCOR5S9FqASzfRZ0M5oVFRJH3QA5RyuShfBZPKoE9U1ZMADyoxUNAB2VmwhWUSDORkPdFFHrHmVHTK7XsEIiZPg4~X-XnILmmCBBeemDv7pPrFRmKlIObOxNK5Rc9zeur14SqoB9ZlN7vIXtv4UXdYKjoEnlCFk9sg1g__" alt="4"/>
                <h3>Shingeki no kyoujin</h3>
            </div>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCpu-Lzq~5P1zXANISdjQHBmcl6rcDaTSgSjACJjVrfdJR5UwP8QLPiPdfK6EPbYtZ98SoX5Da9j4hwbY8RQLohKsr3pI8-szw2JfpNteCExbJlKlBXXKHC4ssW9DoCUkdXqspGqwcXcWuEnq8EL-46275bpSQwNB6tdnpiddYDEP7hPQo~fbO9YM2-gD2kDoluwYILHyR-VYnehRFzkYu71D1jh23WUIrfG2erGFFbkUblUKGC2QARDRGcG5RITMBSwqoNatle4mdhfNUwrUJntovFPS4u5HSJVy0MeAWSQA7obcrvt4o5RnLEVZtihJBOPBDi4iLNn5w304lxf0w__" alt="5"/>
                <h3>Captain Tsubasa</h3>
            </div>
            <div className='anime-img'>
                <img src="https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZilikBRicr1S7j3X3oYUATMGz81iuJrVzKA7lwF27Dl~xtc~jpjGwdNMKG1ULa5yT6bOceSYhWrYRrzwNCr8KKnC69nqA2BY5iUh7Mi9EEN2Jo08HWvzwXBURUVRzBHe3VX4PjVX9RyT40L4S3WXnuQoZda5xF9PsCewqGOZCT96yL4QtsIj9o4j3KY0w3HDXW6fpO0EJH-HVqdNmKagteYjg2yA2I~e1BC5CKcCvbf8E-69owbAoaWfN~6zQSbrgL6buFoUIlTfQV1Uj4QWT2g3K0I-Hmkjw5y9v9AGkIbrPfFxEjohlYVkxHIkikRx6KjzS-D8iPcGTGv0svVVqw__" alt="6"/>
                <h3>Aoashi</h3>
            </div>
        </div>
    </div>
  )
}

export default NewRelease