const maps = document.querySelectorAll('.iran-map__svg g:not(.iran-map__border):not(.iran-map__sea):not(.iran-map__lake) path')
const mapItemInfo = document.querySelector('.iran-map__item-info')

maps.forEach(map => {
    map.addEventListener('click', e => {
        handleMapItemClick(e.target.classList[0])
    })
    map.addEventListener('mouseover', e => {
        getMapItemInfo(e.target.classList[0])
        mapItemInfo.style.display = 'block'
    })
    map.addEventListener('mouseout', () => {
        mapItemInfo.innerHTML = ''
        mapItemInfo.style.display = 'none'
    })
    map.addEventListener('mousemove', e => {
        getMapItemRelativeCoordinates(e)
    })
})

document.addEventListener('scroll', () => {
    mapItemInfo.innerHTML = ''
    mapItemInfo.style.display = 'none'
})

const getMapItemRelativeCoordinates = e => {
    const windowInnerWidthtOffset = window.innerWidth * 0.1
    const windowInnerHeightOffset = window.innerHeight * 0.1

    if (e.clientX + mapItemInfo.clientWidth > window.innerWidth - windowInnerWidthtOffset) {
        mapItemInfo.style.left = e.clientX - mapItemInfo.clientWidth + 'px'
    } else {
        mapItemInfo.style.left = e.clientX + 10 + 'px'
    }
    if (e.clientY + mapItemInfo.clientHeight > window.innerHeight - windowInnerHeightOffset) {
        mapItemInfo.style.top = e.clientY - mapItemInfo.clientHeight + 'px'
    } else {
        mapItemInfo.style.top = e.clientY + 10 + 'px'
    }
}