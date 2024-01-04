import React from 'react'

export default function OperatorSpec() {
  return (
    <div className='border p-4'>
    <section className='mt-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-5'>
        <div className='w-5/6'>
            <label>LCN LookUp Table</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>NIT Actual LCN Descriptor TAG (HEX)</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>BAT LCN Descriptor TAG (HEX)</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>BAT LCN Collection From [HEX]</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>NIT Actual Caching</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>BAT Caching</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>LCN number for Non-LCN Available Channels</label>
            <select type='select' className='form-input'></select>
        </div>
    </section>
    <section className='mt-2'>
        <div className='bg-yellow-500 text-white p-5 rounded-sm'>
          <h1 className='text-lg font-semibold'>Important Notes!!</h1>
          <p className='mt-2'>
            STB will perform factory reset after receving operator specific LCN command. Once it is done, Please resend the "Tunning" & "Monitor Start" command to start the Monitoring...
          </p>
        </div>
        <div>
          <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
        </div>
      </section>
</div>
  )
}
