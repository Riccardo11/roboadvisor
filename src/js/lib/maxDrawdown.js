/* End Not to be used as is in Google Sheets */
/**
 * @file Functions related to drawdowns computation.
 * @author Roman Rubsamen <roman.rubsamen@gmail.com>
 */


 
  
/**
* @function maxDrawdown
*
* @description Compute the maximum drawdown associated to a portfolio equity curve.
*
* @see <a href="https://en.wikipedia.org/wiki/Drawdown_(economics)">https://en.wikipedia.org/wiki/Drawdown_(economics)</a>
* 
* @param {Array.<number>} equityCurve the portfolio equity curve.
* @return {number} the maximum drawdown.
*
* @example
* maxDrawdown([1, 2, 1]); 
* // 0.5, i.e. 50% drawdown
*
* @example
* maxDrawdown([1, 2, 3]);
* // 0.0, i.e. no drawdown
*
* @example
* maxDrawdown([]);
* // 0.0, i.e. no drawdown
*/
function maxDrawdown(equityCurve) {
	// Compute the maximum drawdown and its associated duration
	var maxDd_ = maxDrawdown_(equityCurve, 0, equityCurve.length-1);

	// Return the maximum drawdown
	if (maxDd_[0] == -Infinity) {
		return [0.0,0,0];
	}
	else {
		return maxDd_;
	}
}
  
  
/**
* @function maxDrawdown_
*
* @description Compute the maximum drawdown associated to a portfolio equity curve,
* as well as the indexes of the start/end of the maximum drawdown phase.
*
* In case there are several identical maximum drawdowns, the indexes returned
* correspond to the start/end of the first encountered maximum drawdown phase.
*
* @see <a href="https://en.wikipedia.org/wiki/Drawdown_(economics)">https://en.wikipedia.org/wiki/Drawdown_(economics)</a>
* 
* @param {Array.<number>} equityCurve the portfolio equity curve.
* @param {number} idxStart the equityCurve array index from which to compute the maximum drawdown.
* @param {number} idxEnd the equityCurve index until which to compute the maximum drawdown.
* @return {Array.<number>} in this order, the maximum drawdown and
* the indexes of the start/end of the maximum drawdown phase.
*
* @example
* maxDrawdown_([1, 2, 1], 0, 2); 
* // [0.5, 1.0, 2.0], i.e. 50% drawdown, starting at index 1 and ending at index 2
*
* @example
* maxDrawdown_([1, 2, 3], 0, 2); 
* // [0.0, -1.0, -1.0], i.e. no drawdown computed, hence no start/end indexes
*
* @example
* maxDrawdown_([1, 2, 3], 0, -1); 
* // [-Infinity, -1.0, -1.0], i.e. failure in the drawdown computation, hence no start/end indexes
*/
function maxDrawdown_(equityCurve, idxStart, idxEnd) {
	// Initialisations
	var highWaterMark = -Infinity;
	var maxDd = -Infinity;
	var idxHighWaterMark = -1;
	var idxStartMaxDd = -1;
	var idxEndMaxDd = -1;

	// Loop over all the values to compute the maximum drawdown
	for (var i=idxStart; i<idxEnd+1; ++i) {     
		if (equityCurve[i] > highWaterMark) {
			highWaterMark = equityCurve[i];
			idxHighWaterMark = i;
		}

		var dd = (highWaterMark - equityCurve[i]) / highWaterMark;

		if (dd > maxDd) {
			maxDd = dd;
			idxStartMaxDd = idxHighWaterMark;
			idxEndMaxDd = i;
		}
	}

	// Return the computed values
	return [maxDd, idxStartMaxDd, idxEndMaxDd];
} 


export default maxDrawdown