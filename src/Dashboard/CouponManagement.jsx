import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toaster } from 'evergreen-ui';
import './CouponManagement.css';

const CouponManagement = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    code: '',
    discountPercentage: 5,
    expiryDate: '',
    usageLimit: '',
    description: ''
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_LINK}api/coupons`);
      if (response.data.success) {
        setCoupons(response.data.coupons);
      }
    } catch (error) {
      toaster.danger('Failed to fetch coupons');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.code.trim()) {
      toaster.warning('Please enter a coupon code');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}api/coupons`,
        formData
      );

      if (response.data.success) {
        toaster.success('Coupon created successfully');
        setFormData({
          code: '',
          discountPercentage: 5,
          expiryDate: '',
          usageLimit: '',
          description: ''
        });
        setShowAddForm(false);
        fetchCoupons();
      }
    } catch (error) {
      toaster.danger(error.response?.data?.message || 'Failed to create coupon');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this coupon?')) {
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_LINK}api/coupons/${id}`
      );

      if (response.data.success) {
        toaster.success('Coupon deleted successfully');
        fetchCoupons();
      }
    } catch (error) {
      toaster.danger('Failed to delete coupon');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No expiry';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="coupon-management flex-col">
      <div className="coupon-header flex justify-between gap-x-20">
        <h2>Coupon Management</h2>
        <button 
          className="btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add New Coupon'}
        </button>
      </div>

      {showAddForm && (
        <div className="coupon-form-container">
          <form onSubmit={handleSubmit} className="coupon-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Coupon Code *</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="e.g., SAVE10"
                  required
                  style={{ textTransform: 'uppercase' }}
                />
              </div>

              <div className="form-group">
                <label>Discount Percentage *</label>
                <input
                  type="number"
                  name="discountPercentage"
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  required
                />
              </div>

              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label>Usage Limit</label>
                <input
                  type="number"
                  name="usageLimit"
                  value={formData.usageLimit}
                  onChange={handleInputChange}
                  min="1"
                  placeholder="Leave empty for unlimited"
                />
              </div>

              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Optional description for the coupon"
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit">
              Create Coupon
            </button>
          </form>
        </div>
      )}

      {loading ? (
        <div className="loading">Loading coupons...</div>
      ) : (
        <div className="coupons-table-container">
          <table className="coupons-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Discount</th>
                <th>Status</th>
                <th>Expiry</th>
                <th>Usage</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '40px' }}>
                    No coupons found. Create your first coupon!
                  </td>
                </tr>
              ) : (
                coupons.map(coupon => (
                  <tr key={coupon._id}>
                    <td className="coupon-code">{coupon.code}</td>
                    <td>{coupon.discountPercentage}%</td>
                    <td>
                      <span className={`status-badge ${coupon.isActive ? 'active' : 'inactive'}`}>
                        {coupon.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>{formatDate(coupon.expiryDate)}</td>
                    <td>
                      {coupon.usageLimit 
                        ? `${coupon.usedCount}/${coupon.usageLimit}`
                        : `${coupon.usedCount}/∞`
                      }
                    </td>
                    <td className="description">
                      {coupon.description || '-'}
                    </td>
                    <td className="actions">
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(coupon._id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CouponManagement;