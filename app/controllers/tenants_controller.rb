class TenantsController < ApplicationController
  before_action :set_tenant, only: [:show, :update, :destroy]
  before_action :authorize_request, only:[:create, :update, :destroy]

  # GET /tenants
  def index
    @tenants = Tenant.all

    render json: @tenants, include: :property
  end

  # GET /tenants/1
  def show
    # @property = Property.find(@tenant.property_id)
    render json: @tenant, include: :property
  end

  # POST /tenants
  def create
    @property = Property.find(params[:property_id])
    @tenant = Tenant.where(property_id: @property.id).new(tenant_params)
    
    if @tenant.save
      render json: @tenant, status: :created
    else
      render json: @tenant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tenants/1
  def update
    if @tenant.update(tenant_params)
      render json: @tenant
    else
      render json: @tenant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tenants/1
  def destroy
    @tenant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tenant
      @tenant = Tenant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tenant_params
      params.require(:tenant).permit(:name, :previous_address, :city, :state, :zip_code, :email, :primary_number, :alt_number, :preferred_contact, :property_id)
    end
end
