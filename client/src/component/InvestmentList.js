import React from "react"
import api from '../api/api'

const InvestmentList = ()=> {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [responsePrice, setResponsePrice] = React.useState('')
    let [message, setMessage] = React.useState('')

    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        api.getData()
        .then((response)=>{
            console.log(response)
            const queryResponse = [response.data.finance.result[0].quotes[0].symbol,` `, response.data.finance.result[0].quotes[1].symbol, ` `, response.data.finance.result[0].quotes[2].symbol, ` `, response.data.finance.result[0].quotes[3].symbol, ` `, response.data.finance.result[0].quotes[4].symbol, ` `, response.data.finance.result[0].quotes[5].symbol];
            const responsePrice = [[`$`, response.data.finance.result[0].quotes[0].regularMarketPrice,` $`,  response.data.finance.result[0].quotes[1].regularMarketPrice, ` $`,  response.data.finance.result[0].quotes[2].regularMarketPrice, ` $`, response.data.finance.result[0].quotes[3].regularMarketPrice, ` $`, response.data.finance.result[0].quotes[4].regularMarketPrice, ` $`, response.data.finance.result[0].quotes[5].regularMarketPrice]]
            console.log(queryResponse)
            console.log(responsePrice)
            setResponseData(queryResponse)
            setResponsePrice(responsePrice)
        })
        .catch((error) => {
            setMessage('Error')
            console.log(error)
        })
    }
    const url = `https://widgets.tc2000.com/ChartWidget.aspx?widgetid=202194&service=TCTEMPLATEWIDGET&sym=${responseData[0]}&tf=1DAY&zoomL=3&ID=1487782&w=400&h=300&showZ=True&showTF=True&showSym=False&bars=40`

    return (
        <div
            style={{
                background: '#EEE',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
            <h2>Search Trending Stocks</h2>
            <form onSubmit={fetchData}>
                <fieldset>
                    <legend>Search Stock Market</legend>
                    <label htmlFor="ticker">Press the Submit Button to retrieve stocks

                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <p>{message}</p>
            <h4 style={{position: "relative"}}>Symbol: {responseData}</h4>
            <h4 style={{position: "relative"}}>Price: {responsePrice}</h4>
            <h4 style={{position: "relative"}}>Chart:</h4><a target="_blank" href={url} data-symbol={responseData} data-reactid="73"><iframe src={url} title="Yahoo Finance Charts"></iframe></a>
            
        </div>
    )
}

export default InvestmentList