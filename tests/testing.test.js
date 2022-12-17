const reverse =(string)=>{
    return string
    .split('')
    .reverse()
    .join('')
}

test('reverse of react', ()=>{
    const result=reverse('react')
    expect(result).toBe('tcaer')
})